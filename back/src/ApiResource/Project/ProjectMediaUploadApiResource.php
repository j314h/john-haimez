<?php

namespace App\ApiResource\Project;

use ApiPlatform\Metadata\HttpOperation;
use App\Controller\Media\MediaProjectController;

class ProjectMediaUploadApiResource extends HttpOperation
{
    public function __construct()
    {
        Parent::__construct(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
            method: 'POST',
            uriTemplate: '/media/project/{id}',
            controller: MediaProjectController::class,

            // openapi config
            openapiContext: [
                'summary' => 'Upload or update file for project, must be connected and with role root',
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
