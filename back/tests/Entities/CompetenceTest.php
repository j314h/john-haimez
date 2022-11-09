<?php

namespace App\Tests\Entities;

use App\Entity\Competence;
use App\Tests\Traits\CompetenceTrait;
use App\Tests\Traits\CompetenceTraitAssert;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class CompetenceTest extends KernelTestCase
{
    use CompetenceTrait;
    use CompetenceTraitAssert;

    /**
     * test data entity validate
     *
     * @return void
     */
    public function testValidEntity(): void
    {
        // start kernel for test
        self::bootKernel();

        // if 0 error is good
        $this->assertHasError(0, $this->createEntity());
    }

    /**
     * test data title blank value is not valid
     *
     * @return void
     */
    public function testInvalidBlankTitleEntity(): void
    {
        // start kernel for test
        self::bootKernel();

        // test title empty
        $this->assertHasError(1, $this->createEntity()->setTitle(''));
    }

    /**
     * test data description blank value is not valid
     *
     * @return void
     */
    public function testInvalidBlankDescriptionEntity(): void
    {
        // start kernel for test
        self::bootKernel();

        // test description empty
        $this->assertHasError(1, $this->createEntity()->setDescription(''));
    }
}
