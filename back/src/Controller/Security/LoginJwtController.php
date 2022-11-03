<?php

namespace App\Controller\Security;

use App\Entity\User;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Attribute\AsController;

#[AsController]
class LoginJwtController extends AbstractController
{
    public function __construct(private Security $security)
    {
    }

    /**
     * login user and return json token
     *
     * @param Security $security
     */
    #[Route(path: '/api/user/login', name: 'api_user_login', methods: 'POST')]
    public function apiLogin()
    {
        $user = $this->security->getUser();
        return $user;
    }
}
