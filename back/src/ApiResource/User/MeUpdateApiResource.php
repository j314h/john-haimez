<?php

namespace App\ApiResource\User;

use ApiPlatform\Metadata\HttpOperation;
use App\Controller\User\MeUpdateController;

class MeUpdateApiResource extends HttpOperation
{
    public function __construct()
    {
        Parent::__construct(
            method: 'PUT',
            uriTemplate: '/me',
            controller: MeUpdateController::class,
            securityPostDenormalize: "is_granted('IS_AUTHENTICATED_FULLY')",
            denormalizationContext: ['groups' => ['write:me:put']],

            // openapi config
            openapiContext: [
                'summary' => 'update info user connected, must be authenticated for access'
            ]
        );
    }
}
