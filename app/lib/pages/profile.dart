import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  final Map<String, dynamic> user;
  const ProfileScreen({super.key, required this.user});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Profile'),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildProfileHeader(context),
            const SizedBox(height: 24),
            _buildProfileInfo(context),
          ],
        ),
      ),
    );
  }

  Widget _buildProfileHeader(BuildContext context) {
    return Row(
      children: [
        const CircleAvatar(
          radius: 40,
          // backgroundImage: NetworkImage(user['avatar'] ?? ''),
          child: Icon(Icons.person, size: 40),
        ),
        const SizedBox(width: 16),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              user['name'],
              style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                    fontWeight: FontWeight.bold,
                  ),
            ),
            const SizedBox(height: 4),
            Text(
              user['email'],
              style: Theme.of(context).textTheme.bodyLarge,
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildProfileInfo(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Personal Information',
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.bold,
          ),
        ),
        const Divider(thickness: 1, height: 24),
        _buildInfoRow(context, label: 'Phone Number', value: user['phone'] ?? 'N/A'),
        _buildInfoRow(context, label: 'Address', value: user['address'] ?? 'N/A'),
        const SizedBox(height: 24),
        const Text(
          'Account Information',
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.bold,
          ),
        ),
        const Divider(thickness: 1, height: 24),
        _buildInfoRow(context, label: 'Account Number', value: user['account']['accountNumber'] ?? 'N/A'),
        _buildInfoRow(context, label: 'Account Type', value: user['account']['accountType'] ?? 'N/A'),
        _buildInfoRow(context, label: 'Balance', value: '${user['account']['balance']} ${user['account']['currency']}'),
        _buildInfoRow(context, label: 'Card Number', value: user['account']['cardNumber'] ?? 'N/A'),
        _buildInfoRow(context, label: 'Card Expiry', value: user['account']['cardExpiry'] ?? 'N/A'),
        _buildInfoRow(context, label: 'CVV', value: user['account']['cvv'] ?? 'N/A'),
      ],
    );
  }

  Widget _buildInfoRow(BuildContext context, {required String label, required String value}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            label,
            style: const TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.w500,
            ),
          ),
          Text(
            value,
            style: const TextStyle(
              fontSize: 16,
            ),
          ),
        ],
      ),
    );
  }
}
