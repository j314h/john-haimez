<?php

namespace App\Controller\User;

use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[AsController]
class MeUpdateEmailController extends AbstractController
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

        // update email
        $userCurrent->setEmail($req->toArray()['email'] ?? $userCurrent->getEmail());

        // updated date update
        $userCurrent->setUpdatedAt(new \DateTime);

        return $userCurrent;
    }
}
