<?php

namespace App\ApiResource\User;

use ApiPlatform\Metadata\HttpOperation;
use App\Controller\User\RegisterController;

/**
 * config operation for register user
 */
class RegisterApiResource extends HttpOperation
{
    public function __construct()
    {
        Parent::__construct(
            // securityPostDenormalize: "is_granted('ROLE_ROOT')",
            method: 'POST',
            name: 'user_register',
            uriTemplate: '/user/register',
            controller: RegisterController::class,

            // openapi config
            openapiContext: [
                'summary' => 'Create user, must be connected with role root',

                // body schema
                'requestBody' => [
                    'content' => [
                        'application/json' => [
                            'schema' => [
                                'type' => 'object',
                                'properties' => [
                                    'firstName' => [
                                        'type' => 'string',
                                        'example' => 'john'
                                    ],
                                    'lastName' => [
                                        'type' => 'string',
                                        'example' => 'doe'
                                    ],
                                    'email' => [
                                        'type' => 'string',
                                        'example' => 'example@ex.com'
                                    ],
                                    'password' => [
                                        'type' => 'string',
                                        'example' => 'password'
                                    ],
                                    'roles' => [
                                        'type' => 'string',
                                        'example' => ["ROLE_AUTH"]
                                    ],
                                ]
                            ]
                        ]
                    ]
                ],
            ]
        );
    }
}
