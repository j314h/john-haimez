<?php

namespace App\ApiResource\Media;

use ApiPlatform\Metadata\HttpOperation;
use App\Controller\Media\MediaController;

class MediaUploadApiResource extends HttpOperation
{
    public function __construct()
    {
        Parent::__construct(
            // securityPostDenormalize: "is_granted('ROLE_ROOT')",
            method: 'POST',
            uriTemplate: 'api/media',
            validationContext: ['groups' => ['create:media']],
            controller: MediaController::class,

            // openapi config
            openapiContext: [
                'summary' => 'Upload file, must be connected and with role root',
                'requestBody' => [
                    'content' => [
                        'multipart/form-data' => [
                            'schema' => [
                                'type' => 'object',
                                'properties' => [
                                    'name' => [
                                        'type' => 'string',
                                        'example' => 'nameofcategory (profile, competence, etc)',
                                    ],
                                    'slugMedia' => [
                                        'type' => 'string',
                                        'example' => 'typeofmedia (picture, video, etc.)',
                                    ],
                                    'file' => [
                                        'type' => 'string',
                                        'format' => 'binary'
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        );
    }
}
