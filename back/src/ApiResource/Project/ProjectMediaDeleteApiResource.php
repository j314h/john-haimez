<?php

namespace App\ApiResource\Project;

use ApiPlatform\Metadata\HttpOperation;
use App\Controller\Media\MediaDeleteProjectController;

class ProjectMediaDeleteApiResource extends HttpOperation
{
    public function __construct()
    {
        Parent::__construct(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
            method: 'DELETE',
            uriTemplate: '/media/delete/project/{id}',
            validationContext: ['groups' => ['delete:project:media']],
            controller: MediaDeleteProjectController::class,

            // openapi config
            openapiContext: [
                'summary' => "Delete file's project, must be connected and with role root",
            ]
        );
    }
}
