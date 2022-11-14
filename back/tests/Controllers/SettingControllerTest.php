<?php

namespace App\Tests\Controllers;

use App\Tests\Traits\TestTrait;
use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;
use App\Tests\Traits\SettingTrait;
use App\Tests\Traits\SettingTraitAssert;

class SettingControllerTest extends ApiTestCase
{
    use TestTrait;
    use SettingTrait;
    use SettingTraitAssert;

    /**
     * create setting, user connected
     * status code is 201
     *
     * @return void
     */
    public function testCreateSettingConnected()
    {
        $client = static::createClient();

        // request create profile
        $this->assertStatusCode(
            $client,
            'POST',
            '/api/settings',
            $this->createArrayEntity($this->createEntity()),
            $this->login($client),
            201
        );
    }

    /**
     * create setting, user no connected
     * status code is 401
     *
     * @return void
     */
    public function testCreateSettingNoConnected()
    {
        $client = static::createClient();

        // request create setting
        $this->assertStatusCode(
            $client,
            'POST',
            '/api/settings',
            $this->createArrayEntity($this->createEntity()),
            null,
            401
        );
    }

    /**
     * get all setting
     * status code is 200
     *
     * @return void
     */
    public function testGetAllSetting()
    {
        $client = static::createClient();

        // request get all setting
        $client->request(
            'GET',
            '/api/settings'
        );
        $this->assertResponseStatusCodeSame(200);
    }

    /**
     * get one setting with id
     * status code is 200
     *
     * @return void
     */
    public function testGetOneById()
    {
        $client = static::createClient();
        $idSetting = $this->getIdOfOneSetting($client);

        // request get one setting
        $this->assertStatusCode(
            $client,
            'GET',
            '/api/settings/' . $idSetting,
            null,
            null,
            200
        );
    }

    /**
     * update one setting
     * status code is 200
     *
     * @return void
     */
    public function testUpdateConnected()
    {
        $client = static::createClient();
        $idSetting = $this->getIdOfOneSetting($client);

        // request update setting
        $this->assertStatusCode(
            $client,
            'PUT',
            '/api/settings/' . $idSetting,
            $this->createArrayEntity(
                $this->createEntity()->setCopyright('bipboupbipboup')
            ),
            $this->login($client),
            200
        );
    }

    /**
     * update setting, user no connected
     * status code is 401
     *
     * @return void
     */
    public function testUpdateNoConnected()
    {
        $client = static::createClient();
        $idSetting = $this->getIdOfOneSetting($client);

        // request update setting
        $client->request(
            'PUT',
            '/api/settings/' . $idSetting,
            [
                'json' => $this->createArrayEntity(
                    $this->createEntity()->setCopyright('coucou')
                ),
            ]
        );
        $this->assertResponseStatusCodeSame(401);
    }

    /**
     * delete one setting, user connected
     * status code is 200
     *
     * @return void
     */
    public function testDeleteConnected()
    {
        $client = static::createClient();
        $idSetting = $this->getIdOfOneSetting($client);

        $this->assertStatusCode(
            $client,
            'DELETE',
            '/api/settings/' . $idSetting,
            null,
            $this->login($client),
            204
        );
    }

    /**
     * delete one setting, user no connected
     * status code is 401
     *
     * @return void
     */
    public function testDeleteNoConnected()
    {
        $client = static::createClient();
        $idSetting = $this->getIdOfOneSetting($client);

        $this->assertStatusCode(
            $client,
            'DELETE',
            '/api/settings/' . $idSetting,
            null,
            null,
            401
        );
    }
}
