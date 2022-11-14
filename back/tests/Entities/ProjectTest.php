<?php

namespace App\Tests\Entities;

use App\Tests\Traits\ProjectTrait;
use App\Tests\Traits\ProjectTraitAssert;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class ProjectTest extends KernelTestCase
{
    use ProjectTrait;
    use ProjectTraitAssert;

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
}
