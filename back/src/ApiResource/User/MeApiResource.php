<?php

namespace App\ApiResource\User;

use App\Controller\User\MeController;
use ApiPlatform\Metadata\HttpOperation;

class MeApiResource extends HttpOperation
{
    public function __construct()
    {
        Parent::__construct(
            securityPostDenormalize: "is_granted('IS_AUTHENTICATED_FULLY')",
            method: 'GET',
            uriTemplate: '/me',
            controller: MeController::class,
            read: false,

            // openapi config
            openapiContext: [
                'summary' => 'Get user current information, is connected for access'
            ]
        );
    }
}
