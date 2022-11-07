<?php

namespace App\ApiResource\Profile;

use ApiPlatform\Metadata\HttpOperation;
use App\Controller\Media\MediaDeleteProfileController;

class ProfileMediaDeleteApiResource extends HttpOperation
{
    public function __construct()
    {
        Parent::__construct(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
            method: 'DELETE',
            uriTemplate: '/media/delete/profile/{id}',
            validationContext: ['groups' => ['delete:profile:media']],
            controller: MediaDeleteProfileController::class,

            // openapi config
            openapiContext: [
                'summary' => "Delete file's profile, must be connected and with role root",
            ]
        );
    }
}
