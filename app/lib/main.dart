import 'package:app/utils/AboutUs.dart';
import 'package:app/utils/ContactUs.dart';
import 'package:app/utils/CookiePolicy.dart';
import 'package:app/utils/FAQ.dart';
import 'package:app/utils/OurStory.dart';
import 'package:app/utils/PrivacyPolicy.dart';
import 'package:app/utils/Support.dart';
import 'package:app/utils/TermsOfService.dart';
import 'package:flutter/material.dart';
import 'package:app/splash_screen.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  
  await dotenv.load(fileName: "assets/dotenv");
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'LooterBank',
      theme: ThemeData(
        primaryColor: const Color(0xFF1A3C6E),
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF1A3C6E),
          primary: const Color(0xFF1A3C6E),
          secondary: const Color(0xFFFFD700),
          surface: Colors.white,
        ),
        scaffoldBackgroundColor: Colors.white,
        appBarTheme: const AppBarTheme(
          backgroundColor: Color(0xFF1A3C6E),
          foregroundColor: Colors.white,
          elevation: 0,
        ),
        textTheme: const TextTheme(
          headlineLarge: TextStyle(
            fontSize: 32,
            fontWeight: FontWeight.bold,
            color: Color(0xFF1A3C6E),
          ),
          bodyLarge: TextStyle(fontSize: 16, color: Colors.black87),
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: const Color(0xFF1A3C6E),
            foregroundColor: Colors.white,
            padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(12),
            ),
          ),
        ),
      ),
      home: const SplashScreen(),
      routes: {
        '/about': (context) => const AboutUsScreen(),
        '/contact': (context) => const ContactUsScreen(),
        '/cookie-policy': (context) => const CookiePolicyScreen(),
        '/faq': (context) => const FAQScreen(),
        '/our-story': (context) => const OurStoryScreen(),
        '/privacy-policy': (context) => const PrivacyPolicyScreen(),
        '/support': (context) => const SupportScreen(),
        '/terms-of-service': (context) => const TermsOfServiceScreen(),
      },
      debugShowCheckedModeBanner: false,
    );
  }
}
