<?php

namespace App\Tests\Traits;

use ApiPlatform\Symfony\Bundle\Test\Client;
use App\Entity\Setting;

/**
 * trait for setting
 */
trait SettingTrait
{
    /**
     * create a instance of setting
     *
     * @return Setting
     */
    public function createEntity(): Setting
    {
        return (new Setting())->setCopyright('je suis le copyright');
    }

    /**
     * create a array of setting
     *
     * @param Setting $entity
     * @return array
     */
    public function createArrayEntity(Setting $entity): array
    {
        return [
            'copyright' => $entity->getCopyright(),
        ];
    }

    /**
     * get all settings
     *
     * @param Client $client
     * @return void
     */
    public function getAllSetting(Client $client)
    {
        $client = static::createClient();

        // request get all setting
        $settingsResponse = $client->request(
            'GET',
            '/api/settings'
        );

        /** @var Setting[] $settings */
        $settings = $settingsResponse->toArray();
        return $settings;
    }

    /**
     * get id of one setting
     *
     * @param Client $client
     * @param integer $numberOfId
     * @return void
     */
    public function getIdOfOneSetting(Client $client, int $numberOfId = 0): string
    {
        $settings = $this->getAllSetting($client);

        return $settings['hydra:member'][$numberOfId]['id'];
    }
}
