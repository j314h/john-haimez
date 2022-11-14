<?php

namespace App\Tests\Traits;

use ApiPlatform\Symfony\Bundle\Test\Client;
use App\Entity\Profile;

/**
 * profile trait
 */
trait ProfileTrait
{
    /**
     * create entity profile sample
     *
     * @param string $title
     * @param string $description
     * @return Profile
     */
    public function createEntity(): Profile
    {
        // create data
        $profile = (new Profile())
            ->setTitle('je suis le title')
            ->setSubTitle('je suis le sub title')
            ->setDescription('je suis la description')
            ->setAddress("je suis l'adresse")
            ->setTel('060606060');

        return $profile;
    }

    /**
     * create a array of proile object
     *
     * @param Profile $entity
     * @return array
     */
    public function createArrayEntity(Profile $entity): array
    {
        return [
            'title' => $entity->getTitle(),
            'subTitle' => $entity->getSubTitle(),
            'description' => $entity->getDescription(),
            'address' => $entity->getAddress(),
            'tel' => $entity->getTel(),
        ];
    }

    /**
     * get all the profile
     *
     * @param Client $client
     * @return Profile[]
     */
    public function getAllProfile(Client $client): array
    {
        $profilesResponse = $client->request(
            'GET',
            '/api/profiles'
        );

        // recover array of profile
        /** @var Profile[] $profiles */
        $profiles = $profilesResponse->toArray();
        return $profiles;
    }

    /**
     * get id of one profile
     *
     * @param Client $client
     * @return string
     */
    public function getIdOfOneProfile(Client $client, int $numberOfId = 0): string
    {
        $profiles = $this->getAllProfile($client);

        return $profiles['hydra:member'][$numberOfId]['id'];
    }
}
