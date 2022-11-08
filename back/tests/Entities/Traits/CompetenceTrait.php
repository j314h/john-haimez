<?php

namespace App\Tests\Entities\Traits;

use App\Entity\Competence;

/**
 * functions divers for test competence entity
 */
trait CompetenceTrait
{
    /**
     * create entity competence sample
     *
     * @param string $title
     * @param string $description
     * @return Competence
     */
    public function createEntity(): Competence
    {
        // create data
        $competence = (new Competence())
            ->setTitle('je suis le title')
            ->setDescription('je suis la description');

        return $competence;
    }
}
