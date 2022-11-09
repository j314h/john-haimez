<?php

namespace App\Tests\Traits;

use App\Entity\Competence;
use Symfony\Component\Validator\ConstraintViolation;

/**
 * functions divers for assert exec
 */
trait CompetenceTraitAssert
{
    /**
     * has error
     *
     * @param integer $numberOfError
     * @param Competence $competence
     * @return void
     */
    public function assertHasError(int $numberOfError, Competence $competence)
    {
        $messagesError = [];

        // test validation my object competence
        $errors = self::getContainer()->get('validator')->validate($competence);

        /** @var ConstraintViolation $error */
        foreach ($errors as $error) {
            $messagesError[] = $error->getPropertyPath() . '=>' . $error->getMessage();
        }

        // there should be zero errors
        $this->assertCount($numberOfError, $errors, implode(', ', $messagesError));
    }
}
