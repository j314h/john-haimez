<?php

namespace App\Tests\Controllers;

use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;
use App\Tests\Traits\CompetenceTrait;
use ApiPlatform\Symfony\Bundle\Test\Client;
use App\Entity\Competence;
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
        $response = $client->request('POST', '/api/user/login', ['json' => [
            'email' => 'haimezjohn@gmail.com',
            'password' => 'password',
        ]]);

        // request create competence
        $client->request(
            'POST',
            '/api/competences',
            [
                'json' => $this->createArrayEntity($this->createEntity()),
                'headers' => [
                    'Authorization' => 'Bearer ' . $response->toArray()['token'],
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

    /**
     * request get all competence
     * status code is 200
     *
     * @return void
     */
    public function testGetAllCompetence()
    {
        $client = static::createClient();
        $client->request('GET', '/api/competences');

        $this->assertResponseStatusCodeSame(200);
    }

    /**
     * get one competence, user is connected
     * status code is 200
     *
     * @return void
     */
    public function testGetByIdConnected()
    {
        // get all competence
        $client = static::createClient();
        $resAllCompetences = $client->request('GET', '/api/competences');

        // request connect user root
        $login = $client->request('POST', '/api/user/login', ['json' => [
            'email' => 'haimezjohn@gmail.com',
            'password' => 'password',
        ]]);

        // recover array of competence
        /** @var Competence[] $competences */
        $competences = $resAllCompetences->toArray();

        $client->request(
            'GET',
            '/api/competences/' . $competences['hydra:member'][0]['id'],
            [
                'headers' => [
                    'Authorization' => 'Bearer ' . $login->toArray()['token'],
                ]
            ]
        );

        $this->assertResponseStatusCodeSame(200);
    }

    /**
     * get on competence, user not authenticated
     * status code is 401
     *
     * @return void
     */
    public function testGetByIdNotConnected()
    {
        // get all competence
        $client = static::createClient();
        $resAllCompetences = $client->request('GET', '/api/competences');

        // recover array of competence
        /** @var Competence[] $competences */
        $competences = $resAllCompetences->toArray();

        // get one by id
        $client->request(
            'GET',
            '/api/competences/' . $competences['hydra:member'][0]['id'],
        );

        $this->assertResponseStatusCodeSame(401);
    }

    /**
     * update competence with id, user connected
     * status code is 200
     *
     * @return void
     */
    public function testUpdateConnected()
    {
        // get all competence
        $client = static::createClient();

        // request connect user root
        $login = $client->request('POST', '/api/user/login', ['json' => [
            'email' => 'haimezjohn@gmail.com',
            'password' => 'password',
        ]]);

        $resAllCompetences = $client->request('GET', '/api/competences');

        // recover array of competence
        /** @var Competence[] $competences */
        $competences = $resAllCompetences->toArray();

        // update one by id
        $client->request(
            'PUT',
            '/api/competences/' . $competences['hydra:member'][0]['id'],
            [
                'headers' => [
                    'Authorization' => 'Bearer ' . $login->toArray()['token'],
                ],
                'body' => $this->createArrayEntity(
                    $this->createEntity('hey, hey, hey')
                )
            ]
        );

        $this->assertResponseStatusCodeSame(200);
    }

    /**
     * update competence with id, user connected
     * status code is 200
     *
     * @return void
     */
    public function testUpdateNotConnected()
    {
        // get all competence
        $client = static::createClient();

        $resAllCompetences = $client->request('GET', '/api/competences');

        // recover array of competence
        /** @var Competence[] $competences */
        $competences = $resAllCompetences->toArray();

        // update one by id
        $client->request(
            'PUT',
            '/api/competences/' . $competences['hydra:member'][0]['id'],
            [
                'body' => $this->createArrayEntity(
                    $this->createEntity('hey, hey, hey')
                )
            ]
        );

        $this->assertResponseStatusCodeSame(401);
    }

    /**
     * delete competence less media, user connected
     * status code is 204
     *
     * @return void
     */
    public function testDeleteConnected()
    {
        // get all competence
        $client = static::createClient();

        // request connect user root
        $login = $client->request('POST', '/api/user/login', ['json' => [
            'email' => 'haimezjohn@gmail.com',
            'password' => 'password',
        ]]);

        $resAllCompetences = $client->request('GET', '/api/competences');

        // recover array of competence
        /** @var Competence[] $competences */
        $competences = $resAllCompetences->toArray();

        // update one by id
        $client->request(
            'DELETE',
            '/api/competences/' . $competences['hydra:member'][25]['id'],
            [
                'headers' => [
                    'Authorization' => 'Bearer ' . $login->toArray()['token'],
                ],
            ]
        );

        $this->assertResponseStatusCodeSame(204);
    }

    /**
     * delete competence relationship with media, user connected
     * status code is 500
     *
     * @return void
     */
    public function testDeleteConnectedWithMediaRelation()
    {
        // get all competence
        $client = static::createClient();

        // request connect user root
        $login = $client->request('POST', '/api/user/login', ['json' => [
            'email' => 'haimezjohn@gmail.com',
            'password' => 'password',
        ]]);

        $resAllCompetences = $client->request('GET', '/api/competences');

        // recover array of competence
        /** @var Competence[] $competences */
        $competences = $resAllCompetences->toArray();

        // update one by id
        $client->request(
            'DELETE',
            '/api/competences/' . $competences['hydra:member'][0]['id'],
            [
                'headers' => [
                    'Authorization' => 'Bearer ' . $login->toArray()['token'],
                ],
            ]
        );

        $this->assertResponseStatusCodeSame(500);
    }

    /**
     * delete competence , user not authenticated
     * status code is 401
     *
     * @return void
     */
    public function testDeleteNotConnected()
    {
        // get all competence
        $client = static::createClient();

        $resAllCompetences = $client->request('GET', '/api/competences');

        // recover array of competence
        /** @var Competence[] $competences */
        $competences = $resAllCompetences->toArray();

        // update one by id
        $client->request(
            'DELETE',
            '/api/competences/' . $competences['hydra:member'][25]['id']
        );

        $this->assertResponseStatusCodeSame(401);
    }
}
