<?php

namespace App\Tests\Controllers;

use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;
use App\Tests\Traits\ProfileTrait;
use App\Tests\Traits\ProfileTraitAssert;
use App\Tests\Traits\TestTrait;

class ProfileControllerTest extends ApiTestCase
{
    use ProfileTrait;
    use ProfileTraitAssert;
    use TestTrait;

    /**
     * create profile, user connected
     * status code is 201
     *
     * @return void
     */
    public function testCreateProfileConnected()
    {
        $client = static::createClient();

        // request create profile
        $this->assertStatusCode(
            $client,
            'POST',
            '/api/profiles',
            $this->createArrayEntity($this->createEntity()),
            $this->login($client),
            201
        );
    }

    /**
     * create profile, user no connected
     * status code is 401
     *
     * @return void
     */
    public function testCreateProfileNoConnected()
    {
        $client = static::createClient();

        // request create profile
        $this->assertStatusCode(
            $client,
            'POST',
            '/api/profiles',
            $this->createArrayEntity($this->createEntity()),
            null,
            401
        );
    }

    /**
     * get all profile
     * status code is 200
     *
     * @return void
     */
    public function testGetAllProfile()
    {
        $client = static::createClient();

        // request get all profile
        $client->request(
            'GET',
            '/api/profiles'
        );
        $this->assertResponseStatusCodeSame(200);
    }

    /**
     * update profile, user connected
     * status code is 200
     *
     * @return void
     */
    public function testUpdateConnected()
    {
        $client = static::createClient();
        $idProfile = $this->getIdOfOneProfile($client);

        // request update profile
        $this->assertStatusCode(
            $client,
            'PUT',
            '/api/profiles/' . $idProfile,
            $this->createArrayEntity(
                $this->createEntity()->setTitle('coucou')
            ),
            $this->login($client),
            200
        );
    }

    /**
     * update profile, user no connected
     * status code is 401
     *
     * @return void
     */
    public function testUpdateNoConnected()
    {
        $client = static::createClient();
        $idProfile = $this->getIdOfOneProfile($client);

        // request update profile
        $this->assertStatusCode(
            $client,
            'PUT',
            '/api/profiles/' . $idProfile,
            $this->createArrayEntity(
                $this->createEntity()->setTitle('coucou')
            ),
            null,
            401
        );
    }

    /**
     * delete a profile, user connected
     * status code is 204
     *
     * @return void
     */
    public function testDeleteProfileConnected()
    {
        $client = static::createClient();
        $idProfile = $this->getIdOfOneProfile($client);

        // request update profile
        $this->assertStatusCode(
            $client,
            'DELETE',
            '/api/profiles/' . $idProfile,
            null,
            $this->login($client),
            204
        );
    }

    /**
     * delete profile, user no connected
     * status code is 401
     *
     * @return void
     */
    public function testDeleteProfileNoConnected()
    {
        $client = static::createClient();
        $idProfile = $this->getIdOfOneProfile($client);

        // request update profile
        $this->assertStatusCode(
            $client,
            'DELETE',
            '/api/profiles/' . $idProfile,
            null,
            null,
            401
        );
    }
}
