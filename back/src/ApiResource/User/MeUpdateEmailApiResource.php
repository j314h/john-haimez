<?php

namespace App\ApiResource\User;

use ApiPlatform\Metadata\HttpOperation;
use App\Controller\User\MeUpdateEmailController;

class MeUpdateEmailApiResource extends HttpOperation
{
    public function __construct()
    {
        Parent::__construct(
            method: 'PUT',
            uriTemplate: '/me/update/email',
            controller: MeUpdateEmailController::class,
            securityPostDenormalize: "is_granted('IS_AUTHENTICATED_FULLY')",
            denormalizationContext: ['groups' => ['write:me:put:email']],

            // openapi config
            openapiContext: [
                'summary' => 'update email user connected, must be authenticated for access'
            ]
        );
    }
}
