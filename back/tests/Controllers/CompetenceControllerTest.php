<?php

namespace App\Tests\Controllers;

use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;
use App\Tests\Traits\CompetenceTrait;
use ApiPlatform\Symfony\Bundle\Test\Client;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class CompetenceControllerTest extends ApiTestCase
{
    use CompetenceTrait;

    /**
     * request create competence user connected
     * status code 201
     *
     * @return void
     */
    public function testCreateCompetenceConnected()
    {
        $client = static::createClient();

        // request connect user root
        $response = $client->request('POST', '/api/user/login', ['body' => [
            'email' => 'haimezjohn@gmail.com',
            'password' => 'password',
        ]]);

        $data = json_decode($response->getContent());

        // request create competence
        $client->request(
            'POST',
            '/api/competences',
            [
                'body' => $this->createArrayEntity($this->createEntity()),
                'headers' => [
                    'Authorization' => 'Bearer ' . $data->access_token,
                ]
            ]
        );
        $this->assertResponseStatusCodeSame(201);
    }

    /**
     * request create competence user not connected
     * status code is 401
     *
     * @return void
     */
    public function testCreateCompetenceNotConnected()
    {
        $client = static::createClient();
        $client->request(
            'POST',
            '/api/competences',
            [
                'body' => $this->createArrayEntity($this->createEntity())
            ]
        );
        $this->assertResponseStatusCodeSame(401);
    }
}
