import 'package:flutter/material.dart';

class SupportScreen extends StatelessWidget {
  const SupportScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Support"),
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
                  "How can we help you?",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 20),
                _buildSupportOption(
                  Icons.contact_mail,
                  "Contact Us",
                  "Get in touch with our support team.",
                  () => print("Navigate to Contact Us"),
                ),
                _buildSupportOption(
                  Icons.quiz,
                  "FAQ",
                  "Find answers to frequently asked questions.",
                  () => print("Navigate to FAQ"),
                ),
                _buildSupportOption(
                  Icons.help_center,
                  "Help Center",
                  "Browse our help articles and tutorials.",
                  () => print("Navigate to Help Center"),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSupportOption(IconData icon, String title, String subtitle, VoidCallback onTap) {
    return Card(
      color: Colors.white.withOpacity(0.1),
      margin: const EdgeInsets.symmetric(vertical: 10),
      child: ListTile(
        leading: Icon(icon, color: Colors.white, size: 40),
        title: Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
        subtitle: Text(subtitle, style: const TextStyle(color: Colors.white70)),
        onTap: onTap,
      ),
    );
  }
}
