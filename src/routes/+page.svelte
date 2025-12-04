<script lang="ts">
    export let students: any[] = []; // default to empty array
</script>

<h1>Student Records from Supabase</h1>

{#if students.length === 0}
    <p>No student data found in the database. Check your Supabase table.</p>
{:else}
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Phone Number</th>
            </tr>
        </thead>
        <tbody>
            {#each students as student}
                <tr>
                    <td>{student.student_id}</td>
                    <td>{student.name}</td>
                    <td>{student.dob ?? 'N/A'}</td>
                    <td>{student.phone_number ?? 'N/A'}</td>
                </tr>
            {/each}
        </tbody>
    </table>
{/if}

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #f2f2f2;
    }
</style>