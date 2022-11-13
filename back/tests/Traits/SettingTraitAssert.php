<?php

namespace App\Tests\Traits;

use App\Entity\Setting;
use ApiPlatform\Symfony\Bundle\Test\Client;

/**
 * trait for assert for setting
 */
trait SettingTraitAssert
{
    /**
     * has error
     *
     * @param integer $numberOfError
     * @param Setting $setting
     * @return void
     */
    public function assertHasError(int $numberOfError, Setting $setting)
    {
        $messagesError = [];

        // test validation my object competence
        $errors = self::getContainer()->get('validator')->validate($setting);

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
