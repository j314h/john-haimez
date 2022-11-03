<?php

namespace App\ApiResource\User;

use ApiPlatform\Metadata\HttpOperation;
use App\Controller\User\UpdateController;

class UpdateApiResource extends HttpOperation
{
    public function __construct()
    {
        Parent::__construct(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
            method: 'PUT',
            uriTemplate: '/users/{id}',
            controller: UpdateController::class,
            denormalizationContext: ['groups' => ['write:user:put']],

            // openapi config
            openapiContext: [
                'summary' => 'Update user, must be authenticated with role root for access'
            ]
        );
    }
}
