<?php

namespace App\Controller\User;

use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MeDeleteController extends AbstractController
{
    public function __construct(
        private Security $security,
        private UserRepository $userRepository
    ) {
    }

    public function __invoke(Request $req)
    {
        // recover entity user current with email
        $emailUserCurrent = $this->security->getUser()->getUserIdentifier();
        $userCurrent = $this->userRepository->findOneByEmail($emailUserCurrent);

        // delete account user connected
        $this->userRepository->remove($userCurrent, true);

        return;
    }
}
