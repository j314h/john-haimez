<?php

namespace App\Controller\User;

use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[AsController]
class MeController extends AbstractController
{
    public function __construct(private Security $security)
    {
    }

    /**
     * get user connected
     *
     * @return void
     */
    public function __invoke()
    {
        return $this->security->getUser();
    }
}
