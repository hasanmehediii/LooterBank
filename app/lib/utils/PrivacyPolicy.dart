import 'package:flutter/material.dart';

class PrivacyPolicyScreen extends StatelessWidget {
  const PrivacyPolicyScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Privacy Policy"),
        centerTitle: true,
      ),
      body: Stack(
        children: [
          Container(
            decoration: const BoxDecoration(
              image: DecorationImage(
                image: AssetImage("assets/money.jpg"),
                fit: BoxFit.cover,
              ),
            ),
          ),
          Container(
            color: Colors.black.withOpacity(0.7),
          ),
          SingleChildScrollView(
            padding: const EdgeInsets.all(24.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  "Privacy Policy",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 20),
                _buildSection(
                  "Information We Collect",
                  "We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. We may also collect information automatically, such as your IP address and device type.",
                ),
                _buildSection(
                  "How We Use Your Information",
                  "We use the information we collect to provide, maintain, and improve our services. We may also use your information to communicate with you, such as to send you marketing messages or to respond to your support requests.",
                ),
                _buildSection(
                  "Sharing Your Information",
                  "We do not share your personal information with third parties except as described in this policy. We may share your information with our service providers, such as for payment processing or data analysis.",
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSection(String title, String content) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: const TextStyle(
            color: Colors.white,
            fontSize: 22,
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(height: 10),
        Text(
          content,
          style: const TextStyle(color: Colors.white70, fontSize: 16),
        ),
        const SizedBox(height: 20),
      ],
    );
  }
}
