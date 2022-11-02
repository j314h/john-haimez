<?php

namespace App\Serializer\Denormalizer;

use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;

class MediaDenormalizer implements DenormalizerInterface
{
    public function denormalize(mixed $data, string $type, ?string $format = null, array $context = [])
    {
        return $data;
    }

    public function supportsDenormalization(mixed $data, string $type, ?string $format = null)
    {
        return $data instanceof File;
    }
}
