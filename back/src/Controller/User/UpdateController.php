<?php

namespace App\Controller\User;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[AsController]
class UpdateController extends AbstractController
{
    public function __construct(private UserRepository $userRepository)
    {
    }

    /**
     * update user no connected, only access with user connected with role root
     *
     * @param User $data
     * @param Request $req
     * @return void
     */
    public function __invoke(User $data, Request $req)
    {
        //update name if firstName and lastName exist
        $user = $this->userRepository->updatedNameWithFirstNameAndLastName($data, $req);

        // updated date update
        $user->setUpdatedAt(new \DateTime);

        return $user;
    }
}
