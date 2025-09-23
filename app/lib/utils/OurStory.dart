import 'package:flutter/material.dart';

class OurStoryScreen extends StatelessWidget {
  const OurStoryScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Our Story"),
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
                  "Our Story",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 20),
                _buildSection(
                  "The Beginning",
                  "LooterBank was founded in 2025 by a group of individuals who were tired of the traditional banking system. They wanted to create a bank that was different, a bank that would put the needs of its customers last.",
                ),
                _buildSection(
                  "The Middle",
                  "We quickly became known for our innovative approach to banking. We were the first bank to offer negative interest rates, and we were the first bank to charge a fee for every transaction.",
                ),
                _buildSection(
                  "The Present",
                  "Today, we are the most hated bank in the world. We are proud of our accomplishments, and we look forward to continuing to provide our customers with the worst possible banking experience.",
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
