<?php

namespace App\ApiResource\Competence;

use ApiPlatform\Metadata\HttpOperation;
use App\Controller\Media\MediaCompetenceUpdateController;

class CompetenceMediaUpdateApiResource extends HttpOperation
{
    public function __construct()
    {
        Parent::__construct(
            method: 'POST',
            uriTemplate: 'media/{idMedia}/competence/{idCompetence}',
            controller: MediaCompetenceUpdateController::class,
            read: false,

            // openapi config
            openapiContext: [
                'summary' => 'Upadte file for competence, must be connected and with role root',
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
