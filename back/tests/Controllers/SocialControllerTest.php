<?php

namespace App\Tests\Controllers;

use App\Tests\Traits\TestTrait;
use App\Tests\Traits\SocialTrait;
use App\Tests\Traits\SocialTraitAssert;
use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;

class SocialControllerTest extends ApiTestCase
{
    use TestTrait;
    use SocialTrait;
    use SocialTraitAssert;

    /**
     * create social, user connected
     * status code is 201
     *
     * @return void
     */
    public function testCreateConnected()
    {
        $client = static::createClient();

        // request create profile
        $this->assertStatusCode(
            $client,
            'POST',
            '/api/socials',
            $this->createArrayEntity($this->createEntity()),
            $this->login($client),
            201
        );
    }

    /**
     * create social, user no connected
     * status code is 401
     *
     * @return void
     */
    public function testCreateNoConnected()
    {
        $client = static::createClient();

        // request create profile
        $this->assertStatusCode(
            $client,
            'POST',
            '/api/socials',
            $this->createArrayEntity($this->createEntity()),
            null,
            401
        );
    }

    /**
     * update social, user connected
     * status code is 200
     *
     * @return void
     */
    public function testUpdateConnected()
    {
        $client = static::createClient();
        $idSocial = $this->getIdOfOneSocial($client);

        $this->assertStatusCode(
            $client,
            'PUT',
            '/api/socials/' . $idSocial,
            $this->createArrayEntity(
                $this->createEntity()->setLink('coucou link')
            ),
            $this->login($client),
            200
        );
    }

    /**
     * update social, user no connected
     * status code is 401
     *
     * @return void
     */
    public function testUpdateNoConnected()
    {
        $client = static::createClient();
        $idSocial = $this->getIdOfOneSocial($client);

        $this->assertStatusCode(
            $client,
            'PUT',
            '/api/socials/' . $idSocial,
            $this->createArrayEntity(
                $this->createEntity()->setLink('coucou link')
            ),
            null,
            401
        );
    }

    /**
     * delete a social, user connected
     * status code is 204
     *
     * @return void
     */
    public function testDeleteConnected()
    {
        $client = static::createClient();
        $idSocial = $this->getIdOfOneSocial($client);

        // request update profile
        $this->assertStatusCode(
            $client,
            'DELETE',
            '/api/socials/' . $idSocial,
            null,
            $this->login($client),
            204
        );
    }

    /**
     * delete social, user no connected
     * status code is 401
     *
     * @return void
     */
    public function testDeleteNoConnected()
    {
        $client = static::createClient();
        $idSocial = $this->getIdOfOneSocial($client);

        // request update profile
        $this->assertStatusCode(
            $client,
            'DELETE',
            '/api/socials/' . $idSocial,
            null,
            null,
            401
        );
    }
}
