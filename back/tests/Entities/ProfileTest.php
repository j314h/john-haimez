<?php

namespace App\Tests\Entities;

use App\Tests\Traits\ProfileTrait;
use App\Tests\Traits\ProfileTraitAssert;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class ProfileTest extends KernelTestCase
{
    use ProfileTrait;
    use ProfileTraitAssert;

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
     * test data sub title blank value is not valid
     *
     * @return void
     */
    public function testInvalidBlankSubTitleEntity(): void
    {
        // start kernel for test
        self::bootKernel();

        // test title empty
        $this->assertHasError(1, $this->createEntity()->setSubTitle(''));
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

        // test title empty
        $this->assertHasError(1, $this->createEntity()->setDescription(''));
    }
}
