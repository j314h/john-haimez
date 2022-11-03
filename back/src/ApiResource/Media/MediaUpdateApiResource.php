<?php

namespace App\ApiResource\Media;

use ApiPlatform\Metadata\HttpOperation;
use App\Controller\Media\MediaUpdateController;

class MediaUpdateApiResource extends HttpOperation
{
    public function __construct()
    {
        Parent::__construct(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
            method: 'POST',
            uriTemplate: '/media/{id}',
            validationContext: ['groups' => ['update:media']],
            controller: MediaUpdateController::class,
            deserialize: false,

            // openapi config
            openapiContext: [
                'summary' => 'Update file, must be connected and with role root',
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
