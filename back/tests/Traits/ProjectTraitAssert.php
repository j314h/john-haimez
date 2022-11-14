<?php

namespace App\Tests\Traits;

use ApiPlatform\Symfony\Bundle\Test\Client;
use App\Entity\Project;

/**
 * trait for assert of model social
 */
trait ProjectTraitAssert
{
    /**
     * has error
     *
     * @param integer $numberOfError
     * @param Project $project
     * @return void
     */
    public function assertHasError(int $numberOfError, Project $project)
    {
        $messagesError = [];

        // test validation my object project
        $errors = self::getContainer()->get('validator')->validate($project);

        /** @var ConstraintViolation $error */
        foreach ($errors as $error) {
            $messagesError[] = $error->getPropertyPath() . '=>' . $error->getMessage();
        }

        // there should be zero errors
        $this->assertCount($numberOfError, $errors, implode(', ', $messagesError));
    }

    /**
     * assert for test code for request
     *
     * @param Client $client
     * @param string $method
     * @param string $url
     * @param mixed $data
     * @param string|null $token
     * @param integer $code
     * @return void
     */
    public function assertStatusCode(
        Client $client,
        string $method,
        string $url,
        mixed $data,
        string|null $token,
        int $code,
    ) {
        $client->request(
            $method,
            $url,
            [
                'json' => $data,
                'headers' => [
                    'Authorization' => 'Bearer ' . $token ?: '',
                ]
            ]
        );
        $this->assertResponseStatusCodeSame($code);
    }
}
