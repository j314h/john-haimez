<?php

namespace App\Tests\Traits;

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
}
