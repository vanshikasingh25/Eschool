<script>
    document.querySelector('form').addEventListener('submit', function(event) {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;

        if (!name || !email) {
            alert("Please fill in all required fields.");
            event.preventDefault();
        }
    });
</script>
