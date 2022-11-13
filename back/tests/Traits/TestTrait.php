<?php

namespace App\Tests\Traits;

use \ApiPlatform\Symfony\Bundle\Test\Client;

/**
 * trait for all test
 */
trait TestTrait
{
    /**
     * connected user and recover token
     * return token
     *
     * @param Client $client
     * @return string
     */
    public function login(Client $client): string
    {
        // request connect user root
        $response = $client->request('POST', '/api/user/login', ['json' => [
            'email' => 'haimezjohn@gmail.com',
            'password' => 'password',
        ]]);

        return $response->toArray()['token'];
    }
}
