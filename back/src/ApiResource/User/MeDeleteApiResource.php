<?php

namespace App\ApiResource\User;

use ApiPlatform\Metadata\HttpOperation;
use App\Controller\User\MeDeleteController;

class MeDeleteApiResource extends HttpOperation
{
    public function __construct()
    {
        Parent::__construct(
            securityPostDenormalize: "is_granted('IS_AUTHENTICATED_FULLY')",
            method: 'DELETE',
            uriTemplate: '/me',
            controller: MeDeleteController::class,
            read: false,

            // openapi config
            openapiContext: [
                'summary' => 'Delete me account, is connected for access'
            ]
        );
    }
}
