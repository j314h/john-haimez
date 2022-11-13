<?php

namespace App\Tests\Controllers;

use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;

class AuthControllerTest extends ApiTestCase
{
    /**
     * connexion user
     *
     * @return void
     */
    public function testLogin()
    {
        $client = static::createClient();

        // request connect user root
        $client->request('POST', '/api/user/login', ['json' => [
            'email' => 'haimezjohn@gmail.com',
            'password' => 'password',
        ]]);

        $this->assertResponseStatusCodeSame(200);
    }
}
