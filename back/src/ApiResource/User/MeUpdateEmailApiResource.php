<?php

namespace App\ApiResource\User;

use ApiPlatform\Metadata\HttpOperation;
use App\Controller\User\MeUpdateEmailController;

class MeUpdateEmailApiResource extends HttpOperation
{
    public function __construct()
    {
        Parent::__construct(
            securityPostDenormalize: "is_granted('IS_AUTHENTICATED_FULLY')",
            method: 'PUT',
            uriTemplate: '/me/update/email',
            controller: MeUpdateEmailController::class,
            denormalizationContext: ['groups' => ['write:me:put:email']],

            // openapi config
            openapiContext: [
                'summary' => 'Update email user connected, must be authenticated for access'
            ]
        );
    }
}
