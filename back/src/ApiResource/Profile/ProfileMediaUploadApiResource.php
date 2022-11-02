<?php

namespace App\ApiResource\Profile;

use ApiPlatform\Metadata\HttpOperation;
use App\Controller\Media\MediaProfileController;

class ProfileMediaUploadApiResource extends HttpOperation
{
    public function __construct()
    {
        Parent::__construct(
            method: 'POST',
            uriTemplate: 'media/profile/{id}',
            controller: MediaProfileController::class,

            // openapi config
            openapiContext: [
                'summary' => 'Upload or update file for profile, must be connected and with role root',
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
