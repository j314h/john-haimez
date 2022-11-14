<?php

namespace App\Tests\Entities;

use App\Tests\Traits\SettingTrait;
use App\Tests\Traits\SettingTraitAssert;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class SettingTest extends KernelTestCase
{
    use SettingTrait;
    use SettingTraitAssert;

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
     * test data copyright blank value is not valid
     *
     * @return void
     */
    public function testInvalidBlankCopyrightEntity(): void
    {
        // start kernel for test
        self::bootKernel();

        // test title empty
        $this->assertHasError(1, $this->createEntity()->setCopyright(''));
    }
}
