<?php

namespace App\Tests\Traits;

use ApiPlatform\Symfony\Bundle\Test\Client;
use App\Entity\Project;

/**
 * trait for projects model
 */
trait ProjectTrait
{
    /**
     * create entity project sample
     * 
     * @return Project
     */
    public function createEntity(): Project
    {
        // create data
        $project = (new Project())
            ->setTitle('je suis le title')
            ->setLink('je suis le link')
            ->setPresentation('je suis la présentation')
            ->setTechno('je suis la techno')
            ->setDescription('je suis la description');

        return $project;
    }

    /**
     * create a array of projects object
     *
     * @param Project $entity
     * @return array
     */
    public function createArrayEntity(Project $entity): array
    {
        return [
            'title' => $entity->getTitle(),
            'presentation' => $entity->getPresentation(),
            'description' => $entity->getDescription(),
            'techno' => $entity->getTechno(),
            'link' => $entity->getLink(),
        ];
    }

    /**
     * get all the social
     *
     * @param Client $client
     * @return Project[]
     */
    public function getAllProject(Client $client): array
    {
        $projectsResponse = $client->request(
            'GET',
            '/api/projects'
        );

        // recover array of project
        /** @var Project[] $projects */
        $projects = $projectsResponse->toArray();
        return $projects;
    }

    /**
     * get id of one project
     *
     * @param Client $client
     * @return string
     */
    public function getIdOfOneProject(Client $client, int $numberOfId = 0): string
    {
        $projects = $this->getAllProject($client);

        return $projects['hydra:member'][$numberOfId]['id'];
    }
}
