<?php

namespace App\Tests\Entities;

use App\Tests\Traits\SocialTrait;
use App\Tests\Traits\SocialTraitAssert;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class SocialTest extends KernelTestCase
{
    use SocialTrait;
    use SocialTraitAssert;

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
