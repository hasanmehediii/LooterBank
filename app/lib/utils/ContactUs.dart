import 'package:flutter/material.dart';

class ContactUsScreen extends StatelessWidget {
  const ContactUsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Contact Us"),
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
                  "Get in Touch",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 20),
                _buildContactInfo(Icons.email, "Email", "support@looterbank.com"),
                _buildContactInfo(Icons.phone, "Phone", "+1 (800) 555-0199"),
                _buildContactInfo(Icons.location_on, "Address", "123 Looter Lane, Scamville, USA"),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildContactInfo(IconData icon, String title, String subtitle) {
    return Card(
      color: Colors.white.withOpacity(0.1),
      margin: const EdgeInsets.symmetric(vertical: 10),
      child: ListTile(
        leading: Icon(icon, color: Colors.white, size: 40),
        title: Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
        subtitle: Text(subtitle, style: const TextStyle(color: Colors.white70)),
      ),
    );
  }
}
