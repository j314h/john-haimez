<?php

namespace App\Controller\User;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsController]
class RegisterController extends AbstractController
{
    public function __construct(private UserRepository $userRepo)
    {
    }

    /**
     * hash password and create new user
     *
     * @param User $data
     * @param UserPasswordHasherInterface $password_hasher
     * @return User
     */
    public function __invoke(User $data, UserPasswordHasherInterface $password_hasher,): User
    {
        // hashed password
        $hash_password = $password_hasher->hashPassword($data, $data->getPassword());

        $data->setPassword($hash_password);
        $user = $this->userRepo->createName($data);

        return $user;
    }
}
