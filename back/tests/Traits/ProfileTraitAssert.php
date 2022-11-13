<?php

namespace App\Tests\Traits;

use App\Entity\Profile;

trait ProfileTraitAssert
{
    /**
     * has error
     *
     * @param integer $numberOfError
     * @param Profile $profile
     * @return void
     */
    public function assertHasError(int $numberOfError, Profile $profile)
    {
        $messagesError = [];

        // test validation my object competence
        $errors = self::getContainer()->get('validator')->validate($profile);

        /** @var ConstraintViolation $error */
        foreach ($errors as $error) {
            $messagesError[] = $error->getPropertyPath() . '=>' . $error->getMessage();
        }

        // there should be zero errors
        $this->assertCount($numberOfError, $errors, implode(', ', $messagesError));
    }
}
