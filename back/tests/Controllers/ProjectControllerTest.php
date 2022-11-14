<?php

namespace App\Tests\Controllers;

use App\Tests\Traits\TestTrait;
use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;
use App\Tests\Traits\ProjectTrait;
use App\Tests\Traits\ProjectTraitAssert;

class ProjectControllerTest extends ApiTestCase
{
    use TestTrait;
    use ProjectTrait;
    use ProjectTraitAssert;

    /**
     * create project, user connected
     * status code is 201
     *
     * @return void
     */
    public function testCreateConnected()
    {
        $client = static::createClient();

        $this->assertStatusCode(
            $client,
            'POST',
            '/api/projects',
            $this->createArrayEntity($this->createEntity()),
            $this->login($client),
            201
        );
    }

    /**
     * create project, user no connected
     * status code is 401
     *
     * @return void
     */
    public function testCreateNoConnected()
    {
        $client = static::createClient();

        $this->assertStatusCode(
            $client,
            'POST',
            '/api/projects',
            $this->createArrayEntity($this->createEntity()),
            null,
            401
        );
    }

    /**
     * update project, user connected
     * status code is 200
     *
     * @return void
     */
    public function testUpdateConnected()
    {
        $client = static::createClient();
        $idProject = $this->getIdOfOneProject($client);

        $this->assertStatusCode(
            $client,
            'PUT',
            '/api/projects/' . $idProject,
            $this->createArrayEntity(
                $this->createEntity()->setLink('coucou link')
            ),
            $this->login($client),
            200
        );
    }

    /**
     * update project, user no connected
     * status code is 401
     *
     * @return void
     */
    public function testUpdateNoConnected()
    {
        $client = static::createClient();
        $idProject = $this->getIdOfOneProject($client);

        $this->assertStatusCode(
            $client,
            'PUT',
            '/api/projects/' . $idProject,
            $this->createArrayEntity(
                $this->createEntity()->setLink('coucou link')
            ),
            null,
            401
        );
    }

    /**
     * delete a project, user connected
     * status code is 204
     *
     * @return void
     */
    public function testDeleteConnected()
    {
        $client = static::createClient();
        $idProject = $this->getIdOfOneProject($client);

        $this->assertStatusCode(
            $client,
            'DELETE',
            '/api/projects/' . $idProject,
            null,
            $this->login($client),
            204
        );
    }

    /**
     * delete project, user no connected
     * status code is 401
     *
     * @return void
     */
    public function testDeleteNoConnected()
    {
        $client = static::createClient();
        $idProject = $this->getIdOfOneProject($client);

        $this->assertStatusCode(
            $client,
            'DELETE',
            '/api/projects/' . $idProject,
            null,
            null,
            401
        );
    }
}
