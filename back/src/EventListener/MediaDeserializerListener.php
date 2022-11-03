<?php

namespace App\EventListener;

use Symfony\Component\HttpFoundation\Request;
use ApiPlatform\Util\RequestAttributesExtractor;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use ApiPlatform\Symfony\EventListener\DeserializeListener;
use ApiPlatform\Serializer\SerializerContextBuilderInterface;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;

class MediaDeserializerListener
{

    public function __construct(
        private DeserializeListener $deserializeListener,
        private SerializerContextBuilderInterface $serializerContext,
        private DenormalizerInterface $denormalizer,
    ) {
    }

    public function onKernelRequest(RequestEvent $event)
    {

        // if request is get or delete, switch deserialize
        $req = $event->getRequest();
        if (
            $req->isMethodCacheable() ||
            $req->isMethod(Request::METHOD_DELETE)
        ) {
            return;
        }

        // if request type is multipart deserialize custom
        // else continue deserialize apiplatform
        if ($req->getContentType() === 'form') {
            $this->deserializeRequest($req);
        } else {
            $this->deserializeListener->onKernelRequest($event);
        }
    }

    /**
     * deserialize custom for request multipart
     *
     * @param Request $req
     * @return void
     */
    private function deserializeRequest(Request $req)
    {
        // recover attribute from request
        $attributes = RequestAttributesExtractor::extractAttributes($req);
        if (empty($attributes)) {
            return;
        }

        // create context request
        $context = $this->serializerContext->createFromRequest($req, false, $attributes);

        // add other properties to request
        $populate = $req->attributes->get('data');
        if ($populate !== null) {
            $context['object_to_populate'] = $populate;
        }


        // create and denormalize object with data and files
        $data = $req->request->all();
        $file = $req->files->all();
        $object = $this->denormalizer->denormalize(
            array_merge($data, $file),
            $attributes['resource_class'],
            null,
            $context
        );

        // add object denormalize in data's request
        $req->attributes->set('data', $object);
    }
}
