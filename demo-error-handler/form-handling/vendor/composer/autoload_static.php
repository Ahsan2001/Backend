<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitc388838f49e4ba8137e846c9892a8309
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitc388838f49e4ba8137e846c9892a8309::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitc388838f49e4ba8137e846c9892a8309::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitc388838f49e4ba8137e846c9892a8309::$classMap;

        }, null, ClassLoader::class);
    }
}