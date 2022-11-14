<?php

namespace App\Tests\Traits;

use App\Entity\Social;
use ApiPlatform\Symfony\Bundle\Test\Client;

/**
 * trait for social model
 */
trait SocialTrait
{
    /**
     * create entity social sample
     * 
     * @return Social
     */
    public function createEntity(): Social
    {
        // create data
        $social = (new Social())
            ->setIcon('je suis le icon')
            ->setName('je suis le name')
            ->setLink('je suis le link');

        return $social;
    }

    /**
     * create a array of social object
     *
     * @param Social $entity
     * @return array
     */
    public function createArrayEntity(Social $entity): array
    {
        return [
            'icon' => $entity->getIcon(),
            'name' => $entity->getName(),
            'link' => $entity->getLink(),
        ];
    }

    /**
     * get all the social
     *
     * @param Client $client
     * @return Social[]
     */
    public function getAllSocial(Client $client): array
    {
        $socialsResponse = $client->request(
            'GET',
            '/api/socials'
        );

        // recover array of social
        /** @var Social[] $socials */
        $socials = $socialsResponse->toArray();
        return $socials;
    }

    /**
     * get id of one social
     *
     * @param Client $client
     * @return string
     */
    public function getIdOfOneSocial(Client $client, int $numberOfId = 0): string
    {
        $socials = $this->getAllSocial($client);

        return $socials['hydra:member'][$numberOfId]['id'];
    }
}
